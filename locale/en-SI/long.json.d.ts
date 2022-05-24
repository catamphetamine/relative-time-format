import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SI';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;