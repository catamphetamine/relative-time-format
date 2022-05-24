import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-AT';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;