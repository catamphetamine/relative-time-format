import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ZW';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;