import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'et';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;