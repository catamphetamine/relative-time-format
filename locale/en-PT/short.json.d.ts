import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PT';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;