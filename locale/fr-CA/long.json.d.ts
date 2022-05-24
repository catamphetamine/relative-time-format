import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fr-CA';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;