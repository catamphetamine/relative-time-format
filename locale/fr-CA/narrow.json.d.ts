import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fr-CA';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;