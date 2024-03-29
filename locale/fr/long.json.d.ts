import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fr';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;