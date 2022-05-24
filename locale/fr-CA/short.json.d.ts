import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fr-CA';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;