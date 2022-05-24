import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'et';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;